extends Label

var time_at_start
var time_for_level
var time_left

# Called when the node enters the scene tree for the first time.
func _ready():
	time_for_level = $"/root/Global".active_scene[$"/root/Global".difficulty + 1]
	self.text = str(time_for_level)
	time_left = time_for_level
	time_at_start = OS.get_unix_time()


func _process(_delta):
	time_left = time_for_level - (OS.get_unix_time() - time_at_start)
	if time_left < 0:
		get_tree().get_root().get_node("Node2D/GameManager").on_time_over()
	else:
		self.text = str(time_left)
