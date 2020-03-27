extends Node


var score = 0
var difficulty = 0	# 0 = easy; 1 = medium; 2 = hard
var difficulty_stages = [0, 5, 10]	# score at which difficulty changes
var active_scene_index = -1
var active_scene

# ["name", time_easy, time_medium, time_hard]
var scenes = [
	#["Default_Scene.tscn", 7, 5, 3],
	#["Tab_Moles.tscn", 7, 5, 3],
	#["Magnifying_Glass.tscn", 10, 7, 5],
	["Clean_Screen.tscn", 10, 7, 5],
]


func _ready():
	pass # Replace with function body.


func load_random_game():
	randomize()
	score += 1
	for i in range(3):
		if score > difficulty_stages[i]:
			difficulty = i
	
	var new_active_scene_index = randi() % len(scenes)
	while new_active_scene_index == active_scene_index:
		new_active_scene_index = randi() % len(scenes)
	active_scene_index = new_active_scene_index
	active_scene = scenes[active_scene_index]
	get_tree().change_scene("res://Scenes/" + scenes[active_scene_index][0])

