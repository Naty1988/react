export const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        label: data.label,
        // order: data.order
    }

    return formattedCategory
}