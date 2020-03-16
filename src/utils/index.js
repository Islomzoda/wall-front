export function getExtension(name) {
    const index = name.lastIndexOf('.');
    if (index === -1) {
        return '';
    }

    return name.substring(index).toLowerCase();
}