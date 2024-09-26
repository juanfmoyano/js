/*
[Typed Arrays and Binary Data in JavaScript]

1. Binary Data:
   - Binary data is information stored in a format that computers can directly process.
   - It consists of a sequence of 0s and 1s (bits), typically grouped into bytes (8 bits).
   - Binary data is used for efficient storage and processing of various data types.

2. Buffers:
   - A buffer is a fixed-size chunk of memory allocated to store binary data.
   - It's a low-level construct with no inherent structure or data type.
   - Buffers are used as the foundation for more structured data representations.

3. ArrayBuffer:
   - An ArrayBuffer is a fixed-length container for binary data.
   - It represents a contiguous block of memory but doesn't provide direct access to its contents.
   - ArrayBuffers are used as the underlying storage for typed arrays and DataViews.

Example: ArrayBuffer(16) -> 16 bytes - 128 bits
This shows how different typed arrays can view the same underlying buffer:
*/

const buffer1 = new ArrayBuffer(16);
const buffer2 = new ArrayBuffer(16);
const buffer3 = new ArrayBuffer(16);
const buffer4 = new ArrayBuffer(16);

// Different views of the same buffer
const uint8Array = new Uint8Array(buffer1);
const uint16Array = new Uint16Array(buffer2);
const uint32Array = new Uint32Array(buffer3);
const float64Array = new Float64Array(buffer4);

console.log("Buffer size:", buffer.byteLength, "bytes"); // -> Buffer size: 16 bytes
console.log("Uint8Array length:", uint8Array.length); // -> Uint8Array length: 16
console.log("Uint16Array length:", uint16Array.length); // -> Uint16Array length: 8
console.log("Uint32Array length:", uint32Array.length); // -> Uint32Array length: 4
console.log("Float64Array length:", float64Array.length); // -> Float64Array length: 2	

/*
Visualizing the buffer:
Uint8Array     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10  |  11  |  12  |  13  |  14  |  15  |
Uint16Array    |     0     |     1     |     2     |     3     |     4     |      5      |      6      |      7      |
Uint32Array    |           0           |           1           |           2             |             3             |
Float64Array   |                       0                       |                         1                           |

This visualization shows how different typed arrays interpret the same underlying buffer:
- Uint8Array sees 16 individual bytes
- Uint16Array sees 8 16-bit integers (2 bytes each)
- Uint32Array sees 4 32-bit integers (4 bytes each)
- Float64Array sees 2 64-bit floating-point numbers (8 bytes each)
*/

// Example of writing to the buffer using different views
uint8Array[0] = 255;
uint16Array[2] = 65535;
uint32Array[1] = 4294967295;
float64Array[1] = 3.14159265358979;

console.log({ uint8Array, uint16Array, uint32Array, float64Array}); 
// -> uint8Array: Uint8Array(16) [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// -> uint16Array: Uint16Array(8) [0, 0, 65535, 0, 0, 0, 0, 0]
// -> uint32Array: Uint32Array(4) [0, 4294967295, 0, 0]
// -> float64Array: Float64Array(2) [0, 3.14159265358979]	

/*
4. Views:
   - Views provide a way to interpret and manipulate the raw binary data in a buffer.
   - They give meaning and structure to the otherwise unformatted data in the buffer.
   - Two main types of views in JavaScript: Typed Arrays and DataView.

5. Typed Arrays:
   - Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.
   - They offer a familiar array-like interface for working with binary data.
   - Each typed array type represents a specific numeric data type (e.g., 8-bit integer, 32-bit float).
   - Typed arrays are useful for working with binary data in various Web APIs, such as WebGL, Web Audio, and file handling.
*/

// Example: Creating and using a Uint8Array (8-bit unsigned integer array)
const buffer5 = new ArrayBuffer(16);
const uint8Array = new Uint8Array(buffer5);
uint8Array[0] = 42;
uint8Array[1] = 255;
console.log(uint8Array); // -> Uint8Array(16) [42, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Example: Creating a Float32Array (32-bit floating-point array)
const float32Array = new Float32Array(4);
float32Array[0] = 3.14;
float32Array[1] = -1.5;
console.log(float32Array); // -> Float32Array(4) [3.140000104904175, -1.5, 0, 0]

/*
6. DataView:
   - DataView provides a low-level interface for reading and writing multiple numeric types in an ArrayBuffer.
   - It allows more flexibility in terms of endianness (byte order) and data types within the same buffer.
   - Useful when working with complex binary data formats or when you need fine-grained control over data access.
*/

// Example: Using DataView to read/write different data types
const buffer6 = new ArrayBuffer(16);
const dataView = new DataView(buffer6);
dataView.setInt16(2, 12345, true); // Write a 16-bit integer at byte offset 2 (little-endian)
dataView.setFloat32(4, 3.14159, false); // Write a 32-bit float at byte offset 4 (big-endian)

console.log(dataView.getInt16(2, true)); // -> 12345
console.log(dataView.getFloat32(4, false)); // -> 3.14159

/*
7. SharedArrayBuffer:
   - Similar to ArrayBuffer, but can be shared between multiple threads (Web Workers).
   - Allows concurrent access to the same memory from different execution contexts.
   - Requires careful synchronization to avoid race conditions.

8. Atomics:
   - Provides atomic operations for working with SharedArrayBuffers.
   - Helps ensure data consistency when multiple threads access shared memory.
*/

// Example: Creating a SharedArrayBuffer (note: this may not work in all environments due to security restrictions)
const sharedBuffer = new SharedArrayBuffer(16);
const sharedUint8Array = new Uint8Array(sharedBuffer);

// In a worker thread:
Atomics.store(sharedUint8Array, 0, 42);

// In the main thread:
console.log(Atomics.load(sharedUint8Array, 0)); // -> 42

/*
Key Differences and Use Cases:

1. ArrayBuffer vs SharedArrayBuffer:
   - ArrayBuffer is owned by a single execution context, while SharedArrayBuffer can be shared between multiple contexts.
   - Use ArrayBuffer for most cases where you need to work with binary data within a single thread.
   - Use SharedArrayBuffer when you need to share data between multiple threads (e.g., main thread and Web Workers).

2. Typed Arrays vs DataView:
   - Typed Arrays are more convenient for working with homogeneous data of a single type.
   - DataView is more flexible for working with heterogeneous data or when you need explicit control over endianness.
   - Use Typed Arrays when working with uniform data types (e.g., audio samples, image pixels).
   - Use DataView when dealing with complex binary formats or when you need to mix different data types in the same buffer.

3. Performance Considerations:
   - Typed Arrays generally offer better performance for bulk operations on homogeneous data.
   - DataView may have slightly higher overhead due to its flexibility, but provides more precise control.

4. Web API Integration:
   - Many Web APIs (WebGL, Web Audio, File API) work directly with Typed Arrays, making them a natural choice for these use cases.
*/

// Example: Using Typed Array with Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const sampleRate = audioContext.sampleRate;
const duration = 2; // 2 seconds
const numSamples = sampleRate * duration;

const audioBuffer = audioContext.createBuffer(1, numSamples, sampleRate);
const channelData = audioBuffer.getChannelData(0); // Returns a Float32Array

// Generate a simple sine wave
for (let i = 0; i < numSamples; i++) {
    channelData[i] = Math.sin(440 * Math.PI * 2 * i / sampleRate);
}

// Play the generated audio
const source = audioContext.createBufferSource();
source.buffer = audioBuffer;
source.connect(audioContext.destination);
source.start();

/*
Typed Arrays Constructors (for reference):
+-------------------+-------------------+-----------------------------+
|   Constructor     |   Element Size    |   Value Range               |
+-------------------+-------------------+-----------------------------+
| Int8Array         | 1 byte            | -128 to 127                 |
| Uint8Array        | 1 byte            | 0 to 255                    |
| Uint8ClampedArray | 1 byte            | 0 to 255                    |
| Int16Array        | 2 bytes           | -32768 to 32767             |
| Uint16Array       | 2 bytes           | 0 to 65535                  |
| Int32Array        | 4 bytes           | -2147483648 to 2147483647   |
| Uint32Array       | 4 bytes           | 0 to 4294967295             |
| Float32Array      | 4 bytes           | 1.2e-38 to 3.4e+38          |
| Float64Array      | 8 bytes           | 5e-324 to 1.8e+308          |
| BigInt64Array     | 8 bytes           | -2^63 to 2^63-1             |
| BigUint64Array    | 8 bytes           | 0 to 2^64-1                 |
+-------------------+-------------------+-----------------------------+
*/

// Additional examples and notes on Typed Arrays

// Example: Uint8ClampedArray (useful for image data)
const clampedArray = new Uint8ClampedArray(4);
clampedArray[0] = 100;
clampedArray[1] = -10; // Clamped to 0
clampedArray[2] = 300; // Clamped to 255
clampedArray[3] = 200;
console.log(clampedArray); // -> Uint8ClampedArray(4) [100, 0, 255, 200]

// Note: Typed Arrays have fixed length
const int32Array = new Int32Array(3);
int32Array.push(4); // TypeError: int32Array.push is not a function

// However, you can create a new array with different length
const newInt32Array = new Int32Array([...int32Array, 4]);
console.log(newInt32Array); // -> Int32Array(4) [0, 0, 0, 4]

// Example: Using 'set' method to copy data
const source = new Uint8Array([1, 2, 3, 4]);
const target = new Uint8Array(6);
target.set(source, 1); // Copy 'source' into 'target' starting at index 1
console.log(target); // -> Uint8Array(6) [0, 1, 2, 3, 4, 0]

// Example: Using 'subarray' to create a view of a portion of the array
const original = new Int16Array([1, 2, 3, 4, 5]);
const subset = original.subarray(1, 4);
console.log(subset); // -> Int16Array(3) [2, 3, 4]

// Modifying the subset affects the original array
subset[0] = 10;
console.log(original); // -> Int16Array(5) [1, 10, 3, 4, 5]

// Note: Typed arrays don't have holes
const uint16Array = new Uint16Array(5);
delete uint16Array[2]; // This has no effect
console.log(uint16Array); // -> Uint16Array(5) [0, 0, 0, 0, 0]

// Typed arrays coerce indices to integers
uint16Array[3.7] = 42;
console.log(uint16Array[3]); // -> 42





