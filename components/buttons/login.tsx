import FacebookLogo from "../../assets/svg/facebook.svg";
import GoogleLogo from "../../assets/svg/google.svg";

function GoogleButton() {
	return (
		<button className='px-2 py-4 w-full text-red-500 bg-white rounded-md shadow-md hover:bg-red-200'>
			<div className='flex flex-row justify-evenly'>
				<div>
					<GoogleLogo className="w-6 h-6" />
				</div>

				<div>Continue with Google</div>
			</div>
		</button>
	);
}

function FaceBookButton() {
	return (
		<button className='px-2 py-4 w-full text-blue-900 bg-white rounded-md shadow-md hover:bg-blue-200'>
			<div className='flex flex-row justify-evenly'>
				<div>
					<FacebookLogo className="w-6 h-6" />
				</div>

				<div>Continue with Facebook</div>
			</div>
		</button>
	);
}

export { GoogleButton, FaceBookButton };
