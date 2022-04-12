export function getFileExtension(url: string) {
    const split = url.split(".");

    return split[split.length - 1];
}
