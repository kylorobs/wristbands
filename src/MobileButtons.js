
const MobileButtons = () => {


    return (
        <div style={{zIndex: 1000}} className="fixed bottom-0 z-50 flex bg-indigo-600 w-full justify-around">
            <kclsu-button emitid="guys" purple small margin="0.2em 0 1em 0">Guys</kclsu-button>
            <kclsu-button emitid="strand" purple small  margin="0.2em 0 1em 0">Strand</kclsu-button>
            <kclsu-button emitid="freshers"  purple small margin="0.2em 0 1em 0">Freshers</kclsu-button>
        </div>
    );
}

export default MobileButtons;