export default function destructuring({ special }) {
    return special.map(({ description = 'Описание недоступно', ...skills }) => ({ ...skills, description }));
}
