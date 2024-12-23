# React 19 useEffect Runs Twice on Mount

This repository demonstrates a potential issue where the `useEffect` hook in React 19 might run twice during the initial mount of a component. This can lead to unexpected side effects or performance problems.

## Description

The problem arises when an `useEffect` hook with an empty dependency array is used.  While it's intended to run only once after the component mounts, in some edge cases (likely related to optimizations or specific React versions), it might execute twice.

## Solution

The provided solution addresses this by ensuring the effect only runs once. This solution is also backwards compatible with older versions of React.
