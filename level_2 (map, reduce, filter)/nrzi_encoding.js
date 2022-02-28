export default (graph) => {
    const signals = graph.split('');
    const binary = signals.map((signal, index) => {
    if (signal === '|') return '';
    if (graph[index - 1] === '|') return 1;
    if (graph[index - 1] !== '|') return 0;
    });
    return binary.join('');
  };