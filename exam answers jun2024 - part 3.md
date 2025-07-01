```

**2. (a) What is a CPU in a computer ? What are its components ? Explain the role of each component of the CPU.**

**What is a CPU?**
The **Central Processing Unit (CPU)** is considered the **brain of any computer system**. It is a complex **semiconductor integrated circuit chip** consisting of millions of transistors. Its fundamental operation is to **execute a series of instructions called a program**. The CPU takes all major decisions, performs all sorts of calculations, and directs different parts of the computer's functions by activating and controlling operations. In personal computers, the CPU is also referred to as the **Microprocessor**.

**Components of a CPU:**
A CPU has three major identifiable parts:
1.  **Arithmetic & Logic Unit (ALU)**
2.  **Control Unit (CU)**
3.  **A set of Registers**

**Role of each component of the CPU:**

1.  **Arithmetic & Logic Unit (ALU):**
    *   The ALU is an **important component of the CPU that carries out the actual execution of instructions**.
    *   It is responsible for performing **arithmetic operations** (like addition, subtraction, multiplication, division) and **logical operations** (like comparisons).
    *   Data is transferred to the ALU from the storage unit when required, and after processing, the output is returned to the storage unit.
    *   The ALU has logic implemented to perform these operations on represented numbers, both integer and floating-point.

2.  **Control Unit (CU):**
    *   The Control Unit acts like a **supervisor**, ensuring that tasks are performed in the proper fashion.
    *   It **determines the sequence in which computer programs and instructions are executed**.
    *   Its roles include processing programs stored in main memory, interpreting instructions, and issuing signals for other units of the computer to execute them.
    *   It also **coordinates the activities of computer's peripheral equipment** as they perform input and output.
    *   The CU is responsible for **overall control and coordination of instruction execution**. It generates timing signals and initiates the Fetch cycle of instruction execution. When an instruction is fetched, it generates the sequence of micro-operations needed for its execution.

3.  **Registers:**
    *   Registers are a **small set of high-speed memory locations internal to the processor**.
    *   They are used to **store some data temporarily**. Registers lie above Cache and Main memory in the memory hierarchy, meaning they are the fastest memory components.
    *   They perform two roles:
        *   **User-visible registers:** Used to store temporary data items and other user-accessible information useful for machine or assembly language programmers.
        *   **Control & Status Registers:** Used by the Control Unit to control and coordinate CPU operations. Accumulator is one such register frequently used during ALU operations.

---

**2. (b) What would be the storage capacity of a 2 inch diameter disk pack having 8 plates, with 2048 tracks on a surface. Each track has 512 sectors and each sector can store 1 kB data.**

To calculate the storage capacity of a disk pack, the following formula is used:
**Storage capacity = (m * t * p * s) bytes**
Where:
*   `m` = total number of recording surfaces
*   `t` = tracks per surface
*   `p` = sectors per track
*   `s` = bytes per sector

Given values:
*   Number of plates = 8
*   Tracks per surface (`t`) = 2048
*   Sectors per track (`p`) = 512
*   Data per sector (`s`) = 1 kB = 1024 bytes (since 1 KB = 1024 bytes)

First, calculate the total number of recording surfaces (`m`):
A disk pack typically has two recording surfaces per plate (one on top, one on bottom), unless specified otherwise.
So, `m` = Number of plates * 2 = 8 * 2 = 16 recording surfaces.

Now, substitute the values into the formula:
Storage Capacity = 16 * 2048 * 512 * 1024 bytes
Storage Capacity = 16 * 2048 * 512 * 1024
Storage Capacity = 17,179,869,184 bytes

To convert to GB (Gigabytes), divide by (1024 * 1024 * 1024):
Storage Capacity = 17,179,869,184 / (1024 * 1024 * 1024) GB
Storage Capacity = 17,179,869,184 / 1,073,741,824 GB
Storage Capacity = **16 GB**

The storage capacity of the disk pack would be **17,179,869,184 bytes** or **16 GB**.

---

**2. (c) Explain the term access time in the context of a hard disk with the help of an example.**

**Access Time in Hard Disk Context:**
Access time refers to the **total time required to locate and retrieve stored data from a storage unit** in response to a program instruction. For a magnetic disk like a hard disk, accessing information involves several mechanical movements, which contribute to the overall access time.

The total access time for a hard disk is the sum of two main components:
**Access Time = Seek Time + Latency Time**

1.  **Seek Time (Ts):**
    *   This is the time required to **position the read/write head over the proper track (or cylinder)** where the desired data is located.
    *   The read/write heads are first moved onto the specified track by moving the arm assembly.
    *   Seek time **varies depending on the current position of the arm assembly** and the target track. It's maximum if the head needs to move from the outermost track to the innermost, and zero if it's already on the desired track.
    *   **Average seek time** is generally specified for most systems, typically ranging from a few milliseconds to fractions of a second (e.g., 10 to 15 milliseconds).
    *   For fixed-head systems, seek time is always 0 as there's a head for each track, eliminating movement.

2.  **Latency Time (tL) or Search Time:**
    *   Once the read/write head is positioned on the correct track, the disk is continuously rotating. Latency time is the **rotational waiting time**, i.e., the **time required to bring the needed data (the starting position of the addressed sector) under the read/write head**.
    *   Latency time also **varies**, depending on the distance of the desired data from the initial head position on the track and the rotational speed of the disk.
    *   It is generally averaged for practical purposes.

**Example:**
Imagine you have a file stored on a hard disk. When the operating system needs to read a specific part of this file:
1.  **Seek Time:** The hard disk's read/write arm will first **move across the platters** to position the read/write head precisely over the **correct circular track** where the data block resides. If the data is on Track 500 and the head is currently on Track 100, it needs to "seek" 400 tracks. This movement takes a certain amount of time, say **8 milliseconds**.
2.  **Latency Time:** Once on Track 500, the head has to **wait for the exact sector** containing the data to rotate underneath it. If the disk spins at 7200 RPM, it completes 120 rotations per second. On average, the head would have to wait half a rotation for the sector to appear. This waiting time might be, for instance, **4 milliseconds**.

Therefore, the **total access time** to retrieve that specific data block would be 8 ms (seek time) + 4 ms (latency time) = **12 milliseconds**. This combined time is how long it takes for the drive to get to the data before it can start reading or writing.

---

**2. (d) Explain the following utility software of a computer :**

Utility software programs **help manage, maintain, and control computer resources**. They are designed to assist with day-to-day computing tasks and keep the system running at peak performance.

**(i) Disk checker:**
*   **Purpose:** Disk checkers are used to **check the integrity of the hard disk and Pen Drive/Flash Drive**. They are designed to **fix logical file system errors** found in the disk/drive.
*   **Example:** **CHKDSK** is a command-line tool available on Windows operating systems for this purpose.
*   **Functionality:** It can run in read-only mode to simply report errors, or it can be set to automatically fix file system errors (without scanning for bad sectors) or to repair errors, locate bad sectors, and attempt recovery of readable information.

**(ii) System restore:**
*   **Purpose:** System restore is a utility that helps to **undo changes to the computer and restores its settings and performance** to an earlier state. It is particularly useful in case of system malfunction or failure.
*   **Functionality:** It backs up system files (such as .dll, .exe files) and registry keys, saving them for later use. It creates "restore points" at various times, allowing the user to roll back the system to a previous healthy configuration.
*   **Limitation:** It is important to note that system restore is **not able to take backups of personal files** such as images, e-mails, or documents.

**(iii) Disk defragmenter:**
*   **Purpose:** Disk defragmenter is a utility software that helps **improve the performance of the system by reorganizing fragmented data** on a disk. Fragmentation occurs when parts of files are stored in non-contiguous locations on the hard disk.
*   **Functionality:** It reorganizes fragmented files so they are stored in **contiguous locations**, which **speeds up reading and writing to the disks**.
*   **Maintenance:** Users should run a defragmenter at regular intervals to keep the computer running quickly and efficiently.

---

**3. (a) What is an Operating System ? Explain various services offered by an operating system.**

**What is an Operating System (OS)?**
An Operating System (OS) is **system software** that acts as an **interface between the user of a computer and the computer hardware**. It can be viewed as an **organized collection of software** consisting of procedures for operating a computer and providing an environment for program execution. The basic objectives of an operating system are to **make the computer system convenient to use and to utilize computer hardware in an efficient manner**. It manages all the **resources of the computer system**, such as memory, processor, file system, and input/output devices, keeping track of their status and deciding who controls them, for how long, and when. Without an operating system, a computer is of no use.

**Various Services Offered by an Operating System:**
Operating systems provide a range of services to users and programs to enable efficient and convenient computer usage. These include:

1.  **Command Processor and User Interface (Shell):**
    *   The OS provides interfaces for the user (e.g., keyboard, mouse clicks) and for user programs.
    *   It accepts commands from a user and interprets these commands to take actions.
    *   Common user interfaces include **Graphical User Interface (GUI)**, which relies on menus, mouse movements, and clicks, and **Command Line Interface (CLI)**, which relies on typed commands.
    *   This interface allows users to get work done more quickly and efficiently, combining simplicity with powerful access to computer facilities.

2.  **File Management:**
    *   The OS provides a **file system support to manage huge volumes of data** on secondary storage devices.
    *   A file is a collection of related information, treated as a logical unit of storage.
    *   The file management system provides and maintains the **mapping between a file's logical storage needs and its physical location**. Users and programs access files by name, and the system handles the details of allocating space, storing, and retrieving files.
    *   It ensures **no duplicate use of physical storage** and keeps track of available space on devices.

3.  **Input/Output (I/O) Services:**
    *   Every operating system provides I/O services for each device in the system.
    *   It includes **I/O device driver programs** for each installed device.
    *   These drivers accept I/O requests and **perform the actual data transfers between hardware and specified memory areas**.
    *   Modern OS like Windows support **"plug-and-play"**, integrating drivers for newly installed devices seamlessly.

4.  **Process Control Management:**
    *   A **process is an executing program** and is considered the standard unit of work.
    *   The OS manages processes by determining which jobs are admitted and in what order (**job scheduling**).
    *   It ensures that multiple processes sharing resources do not interfere with each other (e.g., altering critical data).
    *   For multitasking, the OS allocates CPU time equitably to each program.
    *   Many modern systems break processes into smaller units called **threads**, which are individually executable parts of a process that share resources but can be scheduled separately.

5.  **Memory Management:**
    *   The purpose of memory management is to **load programs into memory efficiently**, ensuring each program gets the memory it requires for execution.
    *   It keeps track of **which parts of memory are currently in use** by which process and also available space.
    *   It maintains queues of programs waiting to be loaded, based on criteria like priority and memory requirements.
    *   When space is available, it **allocates memory to programs** and **de-allocates memory when a program completes execution**, making that space available for others.

---

**3. (b) Explain the following with the help of an example for each :**

**(i) Data types:**
*   **Explanation:** A data type is a **classification identifying the type of data** that a variable can hold. It determines the possible values for that type, the operations that can be performed on those values, and how they are stored in memory. Programming languages categorize data into types like integers, floating-point numbers, characters, and sequences of characters (strings).
*   **Example (in C programming language context):**
    ```c
    int age;         // 'int' is a data type for whole numbers (integers).
                     // 'age' variable can store values like 25, 30.
    float price;     // 'float' is a data type for numbers with decimal points.
                     // 'price' variable can store values like 19.99, 100.50.
    char initial;    // 'char' is a data type for single characters.
                     // 'initial' variable can store 'J', 'S'.
    char name;   // 'char name' is for a string (sequence of characters).
                     // 'name' can store "Alice", "Bob".
    ```
    In this example, `int`, `float`, and `char` are data types.

**(ii) One-dimensional arrays:**
*   **Explanation:** An array is a **set of elements of the same data type** that can be individually referenced by an index (or subscript value). A **one-dimensional array** is a structured collection where elements are accessed by specifying a single position (index). These elements are usually placed in contiguous memory locations.
*   **Example (in C programming language context):**
    Suppose you want to store the marks of 5 students. Instead of using 5 different variables like `mark1`, `mark2`, etc., you can use a one-dimensional array:
    ```c
    int marks; // Declares an array named 'marks' that can store 5 integer values.
                  // The elements are accessed using indices from 0 to 4.

    // Assigning values to array elements:
    marks = 85; // Marks of student 1
    marks = 92; // Marks of student 2
    marks = 78; // Marks of student 3
    marks = 65; // Marks of student 4
    marks = 90; // Marks of student 5

    // Accessing and printing an element:
    printf("Marks of student 3: %d\n", marks); // Output: Marks of student 3: 78
    ```
    This `marks` array simplifies managing related data under a single name.

**(iii) Subroutines:**
*   **Explanation:** A subroutine (also called a procedure, routine, or method) is a **piece of code within a larger program that performs a specific task** and is relatively independent of the remaining code. Subroutines help to **avoid repeating the same statements multiple times** in a program, making the code more readable and manageable. They accept information through arguments (parameters) and may have any number of outputs defined in terms of these arguments.
*   **Example (in C programming language context, using a `void` function as an equivalent of a subroutine/procedure):**
    ```c
    #include <stdio.h>

    // Subroutine to print a welcome message
    void greetUser(char name[]) { // 'greetUser' is the subroutine/procedure name, 'name' is a parameter
        printf("Hello, %s! Welcome to the program.\n", name);
    }

    int main() {
        printf("Starting main program...\n");
        greetUser("Alice"); // Calling the subroutine
        printf("Back in main program.\n");
        greetUser("Bob");   // Calling the subroutine again with different data
        return 0;
    }
    ```
    In this example, `greetUser` is a subroutine that performs the task of printing a greeting. It is called twice, demonstrating reusability.

**(iv) Expression:**
*   **Explanation:** In a programming language, an expression is a **combination of operators, operands, and variables that evaluates to a single value**. Every programming language specifies how operators are evaluated in a given expression. Expressions can involve arithmetic operators, relational operators, or logical operators.
*   **Example (in C programming language context):**
    ```c
    int a = 10;
    int b = 5;
    int c;

    // Arithmetic Expression:
    c = a + b * 2; // Evaluates to 10 + (5 * 2) = 10 + 10 = 20.
                   // Here, 'a', 'b', '2' are operands; '+', '*' are arithmetic operators.
                   // This whole statement "a + b * 2" is an expression that evaluates to 20.

    // Relational Expression:
    if (a > b) { // "a > b" is a relational expression that evaluates to TRUE (1) or FALSE (0).
                 // Since 10 is greater than 5, it evaluates to TRUE.
        printf("a is greater than b\n");
    }

    // Logical Expression:
    if ((a == 10) && (b != 0)) { // "(a == 10) && (b != 0)" is a logical expression.
                                 // (a == 10) evaluates to TRUE. (b != 0) evaluates to TRUE.
                                 // TRUE && TRUE evaluates to TRUE.
        printf("Conditions met\n");
    }
    ```
    These examples illustrate how expressions are formed and evaluate to specific values or Boolean results.

**(v) Library function:**
*   **Explanation:** Library functions are **pre-defined functions supplied with the programming language**. The code or definition of these functions does not need to be written by the user in their program. Instead, their definitions are typically found in **header or library files** provided by the language, which need to be included in the program to use them. They perform common, frequently used tasks, saving programmers from rewriting basic functionalities.
*   **Example (in C programming language context):**
    ```c
    #include <stdio.h>  // This line includes the standard input/output library.
    #include <math.h>   // This line includes the math library.

    int main() {
        int num = 25;
        double result;

        // Using the 'printf' library function from <stdio.h> to display output.
        printf("Hello, world!\n");

        // Using the 'scanf' library function from <stdio.h> to take input.
        printf("Enter a number: ");
        scanf("%d", &num);

        // Using the 'sqrt' library function from <math.h> to calculate square root.
        result = sqrt(num);
        printf("The square root of %d is %.2f\n", num, result);

        return 0;
    }
    ```
    In this example, `printf()`, `scanf()`, and `sqrt()` are library functions. Their implementations are provided by the C standard library, and by including `<stdio.h>` and `<math.h>`, the programmer can use them directly without writing their code.

---```