export const Card = ({body, userId, id, title}) => {
    return (
        <div class="relative w-full rounded overflow-hidden shadow-lg m-2">
            <img class="shadow-lg rounded-lg w-full h-64 object-cover" src={body} />
            <div class="px-6 py-4">
                <div class="font-regular text-xl mb-2">{userId}</div>
            </div>
            <div class="px-6 py-4">
                <div class="font-regular text-xl mb-2">{id}</div>
            </div>
            <div class="px-6 py-4">
                <div class="font-regular text-xl mb-2">{title}</div>
            </div>
           
        </div>
    );
}