export default function Chatlist() {
    return(
        <div className="flex flex-row gap-x-6 max-h-[90px] overflow-hidden">
            {/* <div className="h-[90px] w-190px] rounded-full bg-atoll-400"></div> */}
            <div className='flex-shrink-0 w-16 h-16 bg-gray-400 rounded-full'></div>


            <div className="flex flex-col">
                <div className="text-atoll text-sm font-semibold">Monica Lewinsky</div>

                <p className="truncate text-sm">Samsung Galaxy S7 Edge plus</p>

                <div className="truncate text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni pariatur aspernatur sapiente officiis, beatae quis facere culpa non unde eligendi, voluptate sed, quo ducimus eveniet nulla obcaecati impedit ratione.</div>
            </div>
        </div>
    )
}