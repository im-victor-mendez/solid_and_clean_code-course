(() => {
	// No aplicando el principio de responsabilidad única

	type Gender = "M" | "F";

	interface PersonProps {
		birthdate: Date;
		gender: Gender;
		name: string;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		name: string;
		role: string;
	}

	class User extends Person {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ birthdate, email, gender, name, role }: UserProps) {
			super({ name, gender, birthdate });
			this.email = email;
			this.lastAccess = new Date();
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		lastOpenFolder: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthdate,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthdate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date("1985-10-21"),
		email: "fernando@google.com",
		gender: "M",
		lastOpenFolder: "/home",
		name: "Fernando",
		role: "Admin",
		workingDirectory: "/usr/home",
	});

	console.log({ userSettings });
})();
