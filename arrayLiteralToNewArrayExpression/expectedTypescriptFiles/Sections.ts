type UnionReferenceType = string | number | { number: number } | { tool: string }
type SectionValueType = (UnionReferenceType)[];

export const Sections = new Map<string, SectionValueType>(
    new Array<any>(
        new Array<string | SectionValueType>(
            "Groceries",
            new Array<UnionReferenceType>("Item1", "Item2", {number: 3}, 4)
        ),
        new Array<string | SectionValueType>(
            "Tools",
            new Array<UnionReferenceType>("Tool1", {tool: "Other"}, 5, 6, "Tool7")
        )
    )
);

