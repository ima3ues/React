function ButtonI() {

    const styles = {
        button: {
            backgroundColor: 'hsl(247, 30.40%, 45.10%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
        }
    };

    return(
        <button style={styles.button}>
            Click Me "Inline"
        </button>
    );
}

export default ButtonI