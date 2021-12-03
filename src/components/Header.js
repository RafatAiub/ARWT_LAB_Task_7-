import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="col-sm-12">
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand ><Link to="/">Simple E-commerce</Link></Navbar.Brand>
                <Nav className="me-auto navbar_warapper">
                    <Link to="/">Products List</Link>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav className="me-auto">
                        <NavDropdown title={user && user.first_name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}

            </Navbar>

        </div>
    );
}

export default Header;