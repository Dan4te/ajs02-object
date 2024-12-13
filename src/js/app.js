export default function destructuring(charaster) {
    const result = [];
    const { special } = charaster;

    special.forEach((element) => {
        const {
             id, name, icon, description = 'Описание недоступно',
            } = element;
        result.push({
            id, name, icon, description,
        });
    });
    return result;
}
