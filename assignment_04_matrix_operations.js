// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix() {
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const columns = readlineSync.questionInt('Enter number of columns: ');
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
    const values = rowInput.split(/\s+/).map(Number);
    matrix.push(values);
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowLine = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowLine += String(matrix[i][j]).padStart(5, ' ');
    }
    console.log(rowLine);
  }
}

function transposeMatrix(matrix) {
  const transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    transposed.push(newRow);
  }
  return transposed;
}

function addMatrices(matrixA, matrixB) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const result = [];
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

function main() {
  console.log('Part A — Transpose a Matrix');
  const matrix = readMatrix();
  console.log('Original Matrix:');
  printMatrix(matrix);
  console.log('Transposed Matrix:');
  printMatrix(transposeMatrix(matrix));

  console.log('\nPart B — Add Two Matrices');
  const matrixA = readMatrix();
  const matrixB = readMatrix();
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    console.log('Error: Matrices must be the same size.');
  } else {
    console.log('Sum of Matrices:');
    printMatrix(addMatrices(matrixA, matrixB));
  }

  console.log('\nPart C — Multiply Two Matrices');
  const matrixC = readMatrix();
  const matrixD = readMatrix();
  if (matrixC[0].length !== matrixD.length) {
    console.log('Error: The number of columns in matrix A must equal the number of rows in matrix B.');
  } else {
    console.log('Product of Matrices:');
    printMatrix(multiplyMatrices(matrixC, matrixD));
  }
}

main();

