// Achievements are kept in this visitor's browser only.
const STORAGE_KEY = "achievements";

function readList(key: string): string[] {
	try {
		const saved = JSON.parse(localStorage.getItem(key) ?? "[]");
		return Array.isArray(saved) ? saved : [];
	} catch {
		return [];
	}
}

function saveList(key: string, items: string[]) {
	try {
		localStorage.setItem(key, JSON.stringify(items));
	} catch {
		// Without storage, progress still counts for this visit.
	}
}

export const unlockedAchievements = () => readList(STORAGE_KEY);
export const saveAchievements = (ids: string[]) => saveList(STORAGE_KEY, ids);

export function unlock(id: string) {
	document.dispatchEvent(new CustomEvent("achievement", { detail: id }));
}

// Wipes all progress, including partial progress like ROVs already hovered over.
export function resetAchievements() {
	for (const key of [STORAGE_KEY, "rovs-seen", "projects-opened", "resumes"]) {
		try {
			localStorage.removeItem(key);
		} catch {
			// Nothing was saved if storage is blocked.
		}
	}
	document.dispatchEvent(new CustomEvent("achievements-reset"));
}

// For achievements that need several different things done, like hovering over every ROV.
export function track(key: string, item: string, needed: number, id: string) {
	const items = new Set(readList(key));
	items.add(item);
	saveList(key, [...items]);
	if (items.size >= needed) unlock(id);
}
