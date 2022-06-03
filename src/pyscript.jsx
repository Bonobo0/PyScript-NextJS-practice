const pythonScript = `
        import matplotlib.pyplot as plt
        import numpy as np

        x = np.random.randn(1000)
        y = np.random.randn(1000)

        fig, ax = plt.subplots()
        ax.scatter(x, y)
        fig
`;

module.exports = `<!DOCTYPE html>

<html>

<head>
    <title>PyScript</title>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
    <py-env>
        - numpy
        - matplotlib
    </py-env>
</head>

<body>
    <div id="pyscript-container">
        Python on the HTML with PyScript
        <br/>
        Matplotlib Example
        <br/>
        <py-script>
            ${pythonScript}
        </py-script>
        <div>
            Code:
            <pre>${pythonScript}</pre>
        </div>
</body>
</html>
`;
