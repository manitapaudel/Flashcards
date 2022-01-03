import TOC from "@/components/organisms/table-of-contents"

const Index = () => {
    return (
        <div>
            <TOC>
                <TOC.Table />
                <TOC.Content />
            </TOC>
        </div>
    )
}

export default Index