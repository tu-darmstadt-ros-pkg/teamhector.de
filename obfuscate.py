#! /usr/bin/env python3
import sys
import base64

input = sys.argv[1]
print("Obfuscating: " + input)
obfuscated = base64.encodebytes(input.encode()).decode()[::-1]
print("-" * 12)
print(obfuscated)
