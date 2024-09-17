import { headers } from "next/headers";
import Logo from "@/components/ui/logo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NotFoundFooterButtons from "@/components/layout/not-found-footer-buttons";

export default async function NotFound() {
  const headersList = headers();
  console.log(headersList);

  //const domain = headersList.get('host')
  //const data = await getSiteData(domain)
  const pathname = headersList.get("x-pathname");
  const referrer: string = (headersList.get("referrer") as string) || "/";

  const errorMesage = `404 Page Not Found: ${pathname} ${referrer} ${JSON.stringify(headersList)}`;
  console.error(errorMesage);

  return (
    <div className="flex flex-col items-center justify-center gap-md p-md w-full max-w-[1170px] mx-auto text-center">
      <Logo />

      <Card>
        <CardHeader>
          <CardTitle>404 Page Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We looked everywhere for {pathname}, unfortunately we were unable to
            find the page you requested.
          </p>
        </CardContent>
        <CardFooter>
          <NotFoundFooterButtons />
        </CardFooter>
      </Card>
    </div>
  );
}
