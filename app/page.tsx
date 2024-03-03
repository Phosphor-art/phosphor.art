import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen h-screen bg-gray-800">
      <section className="flex-1 gap-[114.67px] rounded-[15px] m-5 bg-white flex justify-center items-center flex-col">
        <Image src={"./logo.svg"} alt={"logo"} width={154} height={89.071} />
        <div className="flex gap-[14px]">
          <div className="p-4 bg-[#F7F7F7] w-[49px] h-[49px] rounded-[4px]">
            <Image src={"./icon/instagram.svg"}
                   alt={"instagram"}
                   width={28}
                   height={28}/>
          </div>
          <div className="p-4 bg-[#F7F7F7] w-[49px] h-[49px] rounded-[4px]">
            <Image src={"./icon/linkedin.svg"}
                   alt={"linkedin"}
                   width={28}
                   height={28}/>
          </div>
          <div className="p-4 bg-[#F7F7F7] w-[49px] h-[49px] rounded-[4px]">
            <Image src={"./icon/behance.svg"}
                   alt={"behance"}
                   width={25}
                   height={17}/>
          </div>
            <div className="p-4 bg-[#F7F7F7] w-[49px] h-[49px] rounded-[4px]">
              <Image src={"./icon/dribbble.svg"}
                     alt={"dribbble"}
                     width={27}
                     height={28}/>
            </div>
          </div>
      </section>
      <section className="flex-1 p-5 bg-red-800">
        <h1 className="text-white text-4xl font-bold">Hello World</h1>
      </section>
    </main>
  );
}
