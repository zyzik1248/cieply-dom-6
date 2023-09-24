import SearchQuery from "@/components/SearchQuery";

async function getData() {
    try {
        const response = await fetch(`http://api.cieplydomcieplykosciol.pl/api/allpages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: "force-cache"
        });

        const json = await response.json();
        return json
    } catch (error) {
        console.log(error)
    }
}

const Search = async () => {
    const urls = await getData()

    return (
        <div className="max-w-normal m-auto my-[100px] px-big">
            <SearchQuery urls={urls}/>
        </div>
    )
}

export default Search