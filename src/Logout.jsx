export default function Logout() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/?status=success&message=Logout successful";
    }

    return (
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    )
}