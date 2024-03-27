export default function Logout() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/?status=success&message=Logout successful";
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}