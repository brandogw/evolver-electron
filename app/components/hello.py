import sys

import time

print(str(sys.argv[0]))
time.sleep(1)
print(str(sys.argv[1]))
time.sleep(1)
print(str(sys.argv[2]))
time.sleep(1)
print(str(sys.argv[3]))

time.sleep(1)

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))
