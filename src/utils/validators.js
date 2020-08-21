export const required = value => {
	if (value) return undefined;
	return 'Обязательное поле';
}
export const lowercaseLetter = value => {
	if (value.match(/[a-z]/)) return undefined;
	return 'Должна быть хотя бы одна маленькая англиская буква';
}
export const uppercaseLetter = value => {
	if (value.match(/[A-Z]/)) return undefined;
	return 'Должна быть хотя бы одна большая англиская буква';
}
export const digit = value => {
	if (value.match(/\d/)) return undefined;
	return 'Должна быть хотя бы одна цифра';
}