import initGame from '../../commands/initGame';
import createGame from '../../commands/createGame';

export async function load() {
	initGame()
	await createGame();
}
