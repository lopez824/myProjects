package Enemies.States {
	
	import Enemies.EnemyA;
	import Enemies.EnemyB;
	
	
	//to set up multiple enemies each enemy needs its own class so fart I have 2 above but only one is coded. Too add the second in you will just uncomment the code below and then add the now uncommented code to the States in the same format as the already existing code, changing the (enemyA:EnemyA) to the matching enemy variable and class ex. (Variable:Class); 
	public interface IEnemyStates {

		// Interface methods:
		function update(enemyA:EnemyA):void;
		function enter(enemyA:EnemyA):void;
		function exit(enemyA:EnemyA):void;
		
		//function update(enemyB:EnemyB):void;
		//function enter(enemyB:EnemyB):void;
		//function exit(enemyB:EnemyB):void;

	}
	
}
