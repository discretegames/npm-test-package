export const var1 = 999;

export const var2 = "abcd";

export const var3 = 3.14;

export const func1 = (log: any = "foo") => {
	console.log(log);
	return log;
};

export const func2 = (a: number, b: number) => a + b;

export default {
	var1,
	var2,
	var3,
	func1,
	func2,
};
