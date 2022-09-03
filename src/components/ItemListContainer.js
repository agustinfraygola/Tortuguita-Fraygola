const { render } = require("@testing-library/react");
const { renderIntoDocument } = require("react-dom/test-utils");

function ItemListContainer() {
    ReactDOM.render(<p>aca es donde iria el texto provisional</p>);
}

export{ ItemListContainer };