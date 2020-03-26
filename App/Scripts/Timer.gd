extends Label

var time_at_start
var time_for_level = 5
var time_left
var debug = false

func _ready():
	# prevent error when scene is run as standalone
	if $"/root/Global".active_scene != null: 
		time_for_level = $"/root/Global".active_scene[$"/root/Global".difficulty + 1]
	else:
		debug = true
	# prepare timer
	self.text = str(time_for_level)
	time_left = time_for_level
	time_at_start = OS.get_unix_time()


func _process(_delta):
	time_left = time_for_level - (OS.get_unix_time() - time_at_start)
	if time_left < 0:
		if not debug:
			get_tree().get_root().get_node("Node2D/GameManager").on_time_over()
	else:
		self.text = str(time_left)
		

