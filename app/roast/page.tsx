import Image from "next/image"

import icon from "../../public/icon.png"


export default function RoastResult({
	searchParams,
}: {
	searchParams: { text: string; image: string };
}) {
	// const roast =
	// 	decodeURIComponent(searchParams.text)! ??
	// 	"the main reason for this gathering.";
	const imageUrl = decodeURIComponent(searchParams.image);

    const roast = `Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Voluptatibus voluptatem, vitae
					id error exercitationem obcaecati eos. Consequuntur, id voluptates
					nemo ab quis aperiam excepturi consectetur tempore in fuga ex illum
					vel alias, qui dolore`;
	return (
		<main className="max-w-2xl mx-auto py-5 px-2 sm:px-0">
			
				<div className="w-full h-full p-3 relative flex justify-center">
					
					
					<div className="h-70 w-70 bg-white/40 rounded-md z-10 top-2 left-48">
						<Image
							src={icon}
							alt="Your face"
							width={400}
						height={400}
						objectFit="contain"
							className="h-70 w-70 bg-white/40 rounded-md 2 left-2"
						/>
					</div>
				
				</div>
		

			{/* BODY  */}

			<div className="my-5">
				<p className="text-justify text-[20px] leading-5.8">
					{roast}
					<span className="text-xl">&quot;</span>
				</p>
			</div>
			<form action="w-full pb-8">
				<input type="hidden" name="roast" value={roast} />
				<input type="hidden" name="roast" value={imageUrl} />
				<button className="w-fit px-8 mt-auto bg-fuchsia-950 text-[16px] py-3 rounded-full font-sans cursor-pointer font-semibold">
					Mint the Roast 
				</button>
			</form>
		</main>
	);
}

