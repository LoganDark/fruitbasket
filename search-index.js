var searchIndex={};
searchIndex["fruitbasket"] = {"doc":"fruitbasket - Framework for running Rust programs in a Mac…","i":[[3,"FruitApp","fruitbasket","Main interface for controlling and interacting with the…",null,null],[3,"Trampoline","","API to move the executable into a Mac app bundle and…",null,null],[3,"FruitStopper","","An opaque, thread-safe object that can interrupt the run…",null,null],[4,"FruitCallbackKey","","Key into the ObjC callback hash map",null,null],[13,"Method","","A callback tied to a generic selector",0,null],[13,"Object","","A callback from a specific object instance",0,null],[4,"RunPeriod","","Options for how long to run the event loop on each call",null,null],[13,"Once","","Run event loop once and return",1,null],[13,"Forever","","Run event loop forever, never returning and blocking the…",1,null],[13,"Time","","Run event loop at least the specified length of time",1,null],[4,"ActivationPolicy","","Policies controlling how a Mac application's UI is…",null,null],[13,"Regular","","Appears in the Dock and menu bar and can have an…",2,null],[13,"Accessory","","Does not appear in Dock or menu bar, but may create windows",2,null],[13,"Prohibited","","Does not appear in Dock or menu bar, may not create…",2,null],[4,"FruitError","","Class for errors generated by fruitbasket. Dereferences to…",null,null],[13,"UnsupportedPlatform","","fruitbasket doesn't run on this platform (safe to ignore)",3,null],[13,"IOError","","Disk I/O errors: failed to write app bundle to disk",3,null],[13,"GeneralError","","Any other unclassified error",3,null],[4,"InstallDir","","Options for where to save generated app bundle",null,null],[13,"Temp","","Store in a system-defined temporary directory",4,null],[13,"SystemApplications","","Store in the system-wide Application directory (all users)",4,null],[13,"UserApplications","","Store in the user-specific Application directory (current…",4,null],[13,"Custom","","Store in a custom directory, specified as a String",4,null],[4,"LogDir","","Options for where to save logging output generated by…",null,null],[13,"Home","","User's home directory",5,null],[13,"Temp","","Temporary directory (as specified by OS)",5,null],[13,"Custom","","Custom location, provided as a String",5,null],[5,"parse_url_event","","Parse an Apple URL event into a URL string",null,[[],["string",3]]],[5,"create_logger","","Enable logging to rolling log files with Rust `log` library",null,[[["logdir",4]],[["fruiterror",4],["string",3],["result",4]]]],[11,"new","","Creates a new Trampoline builder to build a Mac app bundle",6,[[],["trampoline",3]]],[11,"name","","Set name of application.  Same as provided to `new()`.",6,[[]]],[11,"exe","","Set name of executable.  Same as provided to `new()`.",6,[[]]],[11,"ident","","Set app bundle ID.  Same as provided to `new()`.",6,[[]]],[11,"icon","","Set bundle icon file.",6,[[]]],[11,"version","","Set the bundle version.",6,[[]]],[11,"plist_key","","Set an arbitrary key/value pair in the Info.plist",6,[[]]],[11,"plist_keys","","Set multiple arbitrary key/value pairs in the Info.plist",6,[[["vec",3]]]],[11,"plist_raw_string","","Add a 'raw', preformatted string to Info.plist",6,[[["string",3]]]],[11,"resource","","Add file to Resources directory of app bundle",6,[[]]],[11,"resources","","Add multiple files to Resources directory of app bundle",6,[[["vec",3]]]],[11,"build","","Finishes building and launching the app bundle",6,[[["installdir",4]],[["result",4],["fruitapp",3],["fruiterror",4]]]],[11,"is_bundled","","Returns whether the current process is running from a Mac…",6,[[]]],[11,"new","","Initialize the Apple app environment",7,[[],["fruitapp",3]]],[11,"register_callback","","Register to receive a callback when the ObjC runtime…",7,[[["fruitobjccallback",6],["fruitcallbackkey",4]]]],[11,"register_apple_event","","Register application to receive Apple events of the given…",7,[[]]],[11,"set_activation_policy","","Set the app \"activation policy\" controlling what UI it…",7,[[["activationpolicy",4]]]],[11,"terminate","","Cleanly terminate the application",7,[[]]],[11,"stop","","Stop the running app run loop",7,[[["fruitstopper",3]]]],[11,"run","","Runs the main application event loop",7,[[["runperiod",4]],["result",4]]],[11,"stopper","","Create a thread-safe object that can interrupt the run loop",7,[[],["fruitstopper",3]]],[11,"bundled_resource_path","","Locate a resource in the executing Mac App bundle",7,[[],[["string",3],["option",4]]]],[6,"FruitObjcCallback","","A boxed Fn type for receiving Rust callbacks from ObjC…",null,null],[17,"DEFAULT_PLIST","","Info.plist entries that have default values, but can be…",null,null],[17,"FORBIDDEN_PLIST","","Info.plist entries that are set, and cannot be overridden",null,null],[17,"kInternetEventClass","","Apple kInternetEventClass constant",null,null],[17,"kAEGetURL","","Apple kAEGetURL constant",null,null],[17,"keyDirectObject","","Apple keyDirectObject constant",null,null],[11,"stop","","Stop the run loop on the `FruitApp` instance that created…",8,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",3,[[["error",3]]]],[11,"clone","","",8,[[],["fruitstopper",3]]],[11,"default","","",6,[[],["trampoline",3]]],[11,"eq","","",0,[[["fruitcallbackkey",4]]]],[11,"ne","","",0,[[["fruitcallbackkey",4]]]],[11,"eq","","",1,[[["runperiod",4]]]],[11,"ne","","",1,[[["runperiod",4]]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"hash","","",0,[[]]],[11,"description","","",3,[[]]],[11,"cause","","",3,[[],[["option",4],["error",8]]]]],"p":[[4,"FruitCallbackKey"],[4,"RunPeriod"],[4,"ActivationPolicy"],[4,"FruitError"],[4,"InstallDir"],[4,"LogDir"],[3,"Trampoline"],[3,"FruitApp"],[3,"FruitStopper"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);