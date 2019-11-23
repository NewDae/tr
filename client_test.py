import time
from random import randrange
from socketIO_client import SocketIO, LoggingNamespace
import pexpect

# Run gatttool interactively.
print("Run gatttool...")
child = pexpect.spawn("gatttool -t random -b DB:40:C2:FF:CC:8B --interactive")
 
# Connect to the device.
print("Connecting ")
child.sendline("connect")
child.expect("Connection successful", timeout=40)
print(" Connected!")


'''
Sending data format:
    data= {
        'e': value,
        'walk': value,
        'fast_walk': value,
        'walk_time': value,
        'fast_walk_time': value,
        'rest_time': value,
    }
'''
def hr():   
            child.expect("Notification handle = 0x000e value: ", timeout=1)
            child.expect("\r\n", timeout=1)
            time.sleep(1)
            return(int(child.before[2:5],16))

if __name__ == '__main__':
    with SocketIO('localhost', 8000, LoggingNamespace) as socketIO:
        while True:
            child.sendline("char-write-req 0x000f 0100")
            # Data for testing
            send_data = {
                'e': hr(),
                'walk': randrange(50),
                'fast_walk': randrange(50),
                'walk_time': randrange(50),
                'fast_walk_time': randrange(50),
                'rest_time': randrange(50),
            }
            print(send_data)

            # Send
            socketIO.emit('my event', send_data)
