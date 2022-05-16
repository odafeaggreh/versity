import { AdSlider } from "../../sliders";
import { PageSlug } from "../../slug";
import Layout from "../layout";
import {
	AdAddress,
	AdContactCard,
	AdDescription,
	AdDetails,
	AdFeedback,
	MessageCard,
	ReportCard,
	SimilarAd,
	Thumbnails,
} from "../../cards";

export default function View() {
	return (
		<Layout search>
			<>
				<PageSlug />

				<div className='flex flex-row justify-between w-full'>
					<div className='flex flex-col pr-10 w-3/4'>
						<div className='max-h-[500px]'>
							<AdSlider images={["1", "2", "3"]} />
						</div>

						<div className='mt-6'>
							<Thumbnails
								images={[
									"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
									"https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
									"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80",
									"https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
									"https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
								]}
							/>
						</div>

						<div className='flex flex-row justify-between'>
							<div className='flex flex-col gap-y-2 mt-8'>
								<div className='text-2xl font-semibold capitalize font-Dubai'>
									High rise BQ
								</div>

								<div className='text-gray-500 uppercase'>
									Unilag
								</div>

								<div className='text-gray-500'>
									Today at 02:01 pm
								</div>
							</div>

							<div className='flex flex-row gap-x-4 mt-24'>
								<div className="my-auto">
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-8 h-8'
										viewBox='0 0 20 20'
										fill='#908D8D'
									>
										<path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
										<path
											fillRule='evenodd'
											d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
											clipRule='evenodd'
										/>
									</svg>
								</div>

								<div className="my-auto">243 views</div>
							</div>
						</div>

						<div className="mt-12">
							<AdDetails />
						</div>

						<div className="mt-12">
							<AdDescription />
						</div>

						<div className="mt-12">
							<AdAddress />
						</div>

						<div className="mt-12">
							<AdFeedback />
						</div>
						
					</div>

					<div className='flex flex-col float-right w-1/4'>
						<div className='mb-4'>
							<AdContactCard />
						</div>

						<div className='mb-4'>
							<MessageCard />
						</div>

						<div className='mb-4'>
							<SimilarAd />
						</div>

						<div className='mb-4'>
							<ReportCard />
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
