
import Image from "next/image";
import axios from "axios";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

async function Contributors() {

  const res = await axios.get('https://api.github.com/repos/punyakrit/social-share/contributors')
  const contributors = res.data
  

  return (
    <div className="h-full ">
      <div className="py-20">
        <h2 className="text-2xl font-bold pt-10 text-white text-center">Contributors</h2>
        <div className="flex flex-wrap   sm:px-20 mt-20 justify-center  ">
          {contributors.map((contributor: { url: string; id: Key | null | undefined; login: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; avatar_url: string | StaticImport; contributions: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => {
            const username = contributor.url.split("/").pop();
            const profileUrl = `https://github.com/${username}`;
            return (
              <div key={contributor.id} className="-mt-32 p-5">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {contributor.login}
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={contributor.avatar_url}
                        height="300"
                        width="300"
                        className="h-60 w-full  object-contain rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Contributions : {contributor.contributions}
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        target={"_blank"}
                        href={profileUrl}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Github Profile
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contributors;
