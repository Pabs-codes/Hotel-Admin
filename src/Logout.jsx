export default function Logout() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}