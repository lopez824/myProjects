package Enemies.States {
	
	import Enemies.EnemyA;
	
	public class Attack implements IEnemyStates {

		public function update(enemyA:EnemyA):void {
			if(enemyA.deathCounter < 24) {
				enemyA.deathCounter ++;
			}
			if(enemyA.deathCounter == 24) {
			}
		}    
		public function enter(enemyA:EnemyA):void {
			enemyA.gotoAndStop("explosion");
			trace("explode!");
			enemyA.speed = 0;
			enemyA.damagePlayer();
		}
		public function exit(enemyA:EnemyA):void {
		}
	}
}
	

