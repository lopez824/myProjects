package Enemies.States {
	import Enemies.EnemyA;
	
	public class deadState implements IEnemyStates {

		public function update(enemyA:EnemyA):void {
			if(enemyA.deathCounter < 24) {
				enemyA.deathCounter ++;
			}
			if(enemyA.deathCounter == 24) {
				enemyA.gotoAndStop("dead");
			}
		}
		public function enter(enemyA:EnemyA):void {
			enemyA.gotoAndStop("explosion");
			enemyA.speed = 0;
		}
		public function exit(enemyA:EnemyA):void {
		}
	}
}
