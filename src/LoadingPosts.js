export const LoadingCard = () => {
    return (
        <div class="relative w-full rounded overflow-hidden shadow-lg m-2">
            <div class="relative inset-0 shadow-lg rounded-lg w-full h-64 bg-gray-300 animate-pulse"></div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
          
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5];
    return (
        <div className="grid grid-cols-5 gap-4 content-start">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}