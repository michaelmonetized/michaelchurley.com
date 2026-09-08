"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export type TagWithCount = {
  tag: string;
  count?: number;
};

type TagFilterProps = {
  tags: TagWithCount[] | string[];
  selectedTag?: string;
};

function normalizeTags(tags: TagFilterProps["tags"]): TagWithCount[] {
  return tags.map((entry) =>
    typeof entry === "string" ? { tag: entry } : entry,
  );
}

function highlightMatch(label: string, query: string) {
  if (!query.trim()) return label;
  const lower = label.toLowerCase();
  const q = query.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx < 0) return label;
  return (
    <>
      {label.slice(0, idx)}
      <mark className="bg-transparent text-primary font-semibold">
        {label.slice(idx, idx + q.length)}
      </mark>
      {label.slice(idx + q.length)}
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function TagFilter({ tags, selectedTag }: TagFilterProps) {
  const router = useRouter();
  const listboxId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const normalized = useMemo(() => normalizeTags(tags), [tags]);

  const popular = useMemo(() => {
    const withCounts = normalized.filter((t) => typeof t.count === "number");
    if (withCounts.length > 0) {
      return [...withCounts]
        .sort((a, b) => (b.count ?? 0) - (a.count ?? 0) || a.tag.localeCompare(b.tag))
        .slice(0, 8);
    }
    return normalized.slice(0, 8);
  }, [normalized]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return popular;
    return normalized
      .filter((t) => t.tag.toLowerCase().includes(q))
      .slice(0, 12);
  }, [normalized, popular, query]);

  const selectTag = useCallback(
    (tag: string | null) => {
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
      if (!tag) {
        router.push("/blog");
        return;
      }
      router.push(`/blog?tag=${encodeURIComponent(tag)}`);
    },
    [router],
  );

  useEffect(() => {
    function onDocPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocPointer);
    return () => document.removeEventListener("mousedown", onDocPointer);
  }, []);

  useEffect(() => {
    function onSlash(event: KeyboardEvent | globalThis.KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
      if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onSlash);
    return () => window.removeEventListener("keydown", onSlash);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const choice = filtered[activeIndex];
      if (choice) selectTag(choice.tag);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      setQuery("");
      return;
    }
    if (event.key === "Backspace" && query === "" && selectedTag) {
      event.preventDefault();
      selectTag(null);
    }
  }

  const showingPopular = query.trim().length === 0;

  return (
    <div
      ref={rootRef}
      className="sticky top-0 z-20 -mx-1 bg-gradient-to-b from-Base via-Base/95 to-transparent px-1 pb-2 pt-1"
    >
      <div className="relative mx-auto w-full max-w-[28rem]">
        <div
          className={cn(
            "flex h-10 items-center gap-2 rounded-md border border-input bg-background px-3",
            "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
          )}
        >
          <SearchIcon className="h-4 w-4 shrink-0 text-muted-foreground" />

          {selectedTag ? (
            <span className="inline-flex max-w-[40%] shrink-0 items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              <span className="truncate">{selectedTag}</span>
              <button
                type="button"
                aria-label={`Clear tag ${selectedTag}`}
                className="grid h-4 w-4 place-items-center rounded-full opacity-85 hover:bg-black/15 hover:opacity-100"
                onClick={() => selectTag(null)}
              >
                ×
              </button>
            </span>
          ) : null}

          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={
              open && filtered[activeIndex]
                ? `${listboxId}-opt-${activeIndex}`
                : undefined
            }
            value={query}
            placeholder="Filter by tag…"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
          />

          <kbd className="hidden rounded border border-input px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline-block">
            /
          </kbd>
        </div>

        {open ? (
          <div
            id={listboxId}
            role="listbox"
            aria-label="Tags"
            className="absolute inset-x-0 top-[calc(100%+6px)] z-30 max-h-64 overflow-auto rounded-md border border-input bg-background shadow-lg"
          >
            {filtered.length === 0 ? (
              <p className="px-3 py-3 text-sm text-muted-foreground">No tags match.</p>
            ) : (
              <>
                <p className="px-3 py-2 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                  {showingPopular ? "Popular tags" : "Matching tags"}
                </p>
                {filtered.map((item, index) => (
                  <button
                    key={item.tag}
                    id={`${listboxId}-opt-${index}`}
                    type="button"
                    role="option"
                    aria-selected={selectedTag === item.tag || activeIndex === index}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm",
                      activeIndex === index || selectedTag === item.tag
                        ? "bg-muted"
                        : "hover:bg-muted/80",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectTag(item.tag)}
                  >
                    <span>{highlightMatch(item.tag, query)}</span>
                    {typeof item.count === "number" ? (
                      <span className="text-xs text-muted-foreground">{item.count}</span>
                    ) : null}
                  </button>
                ))}
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
