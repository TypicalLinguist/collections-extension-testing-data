type UnionReferenceType = string | number | { number: number } | { tool: string }
type SectionValueType = (UnionReferenceType)[];

export const Sections = new Map<string, SectionValueType>([
    ["Groceries", ["Item1", "Item2", {number: 3}, 4]],
    ["Tools", ["Tool1", {tool: "Other"}, 5, 6, "Tool7"]]
]);