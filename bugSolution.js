```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      console.log('Effect ran!');
      setHasMounted(true);
    }
  }, [hasMounted]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```