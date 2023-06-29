import { COCUR } from "../config/Config"

export const CoCur = () => {
    return (
        <section className="sect first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid ">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    Co-Curricular Achievements
                </h2>
                <div className="pb-2 mb-2 break-inside-avoid border-l-2 pl-2">
                    {
                        COCUR.map((skill, index) => {
                            return (
                                <section className="mb-2 break-inside-avoid" key={index}>
                                    <header>
                                        <h3 className="mt-2.1 text-md text-gray-700 leading-normal">
                                            › {skill.title}
                                        </h3>
                                    </header>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}