import React, { useRef, useState } from "react";
import { arrow } from "@/assets";
import styles from "@/app/faq/faq.module.css";
import Image from "next/image";

type Faq = {
	id: number;
	category: string;
	question: string;
	answer: string;
};

type Props = {
	faqs: Faq[];
};

const FaqAccordion: React.FC<Props> = ({ faqs }) => {
	const scrollableRef = useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartX(e.clientX - (scrollableRef.current?.offsetLeft ?? 0));
		setScrollLeft(scrollableRef.current?.scrollLeft ?? 0);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.clientX - (scrollableRef.current?.offsetLeft ?? 0);
		const scrollX = x - startX;
		if (scrollableRef.current) {
			scrollableRef.current.scrollLeft = scrollLeft - scrollX;
		}
	};

	const handlePointerUp = () => {
		setIsDragging(false);
	};

	const [activeCategory, setActiveCategory] = useState<string | null>(
		"General"
	);
	const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

	const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

	return (
		<div className='lg:px-[100px] px-4 md:px-8 flex lg:flex-row flex-col text-black lg:gap-12 md:gap-10'>
			{/* Category list */}
			<div className='lg:w-1/3 bg-[#fffade] md:p-8 py-6 rounded-xl'>
				<h1 className='lg:block hidden mb-6 font-bold text-[22px] leading-9 text-black'>
					Categories
				</h1>
				<div
					ref={scrollableRef}
					onPointerDown={handlePointerDown}
					onPointerMove={handlePointerMove}
					onPointerUp={handlePointerUp}
					className='flex lg:flex-col flex-nowrap md:justify-between gap-1'>
					{[
						"General",
						"Employability",
						"Events and Collaborations",
						"Community",
					].map((category) => (
						<div
							key={category}
							className={`cursor-pointer rounded-full flex-nowrap inline-flex shrink-0 font-medium text-[14px] px-6 py-3 leading-[19px] ${
								activeCategory === category ? "font-bold bg-purple-600" : ""
							}`}
							onClick={() => setActiveCategory(category)}>
							{category}
						</div>
					))}
				</div>
			</div>

			{/* FAQs */}
			<div className='lg:w-3/4 p-4 text-black'>
				{filteredFaqs.map((faq) => (
					<div key={faq.id} className='mb-4 border-b border-gray-300'>
						<div
							className='cursor-pointer flex justify-between items-center font-bold py-2'
							onClick={() =>
								setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
							}>
							{faq.question}

							<span
								className={`${
									activeQuestion === faq.id ? "transform rotate-180" : ""
								} transition-transform`}>
								<Image src={arrow} alt='arrow' />
							</span>
						</div>
						{activeQuestion === faq.id && (
							<div className='py-2 text-[#424242]'>{faq.answer}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FaqAccordion;
