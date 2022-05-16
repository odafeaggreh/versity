import Logo from '../../assets/svg/mobile-loader.svg';

export default function Loading() {
    return (
        <div className="flex flex-col m-auto justify-center gap-y-12 text-center w-full h-screen">
            <div className="">
                <Logo className="w-1/3 mx-auto" />
            </div>

            <div className="font-light text-3xl">varsityhub.ng</div>
        </div>
    )
}