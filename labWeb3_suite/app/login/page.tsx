import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

// Page login — reproduit login.html du lab3
export default function LoginPage() {
  return (
    <>
      <Header />

      <div className="container my-5 px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">

            {/* Carte de connexion */}
            <div className="card shadow p-4">

              {/* Icône utilisateur */}
              <div className="text-center mb-4">
                <i className="bi bi-person-circle text-secondary" style={{ fontSize: "5rem" }}></i>
              </div>

              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username or Email</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username or email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>

                <button type="submit" className="btn btn-dark w-100 mb-3">Login</button>

                <div className="text-center">
                  <small><a href="#" className="text-decoration-none">Forgot password?</a></small>
                </div>
              </form>

              <hr className="my-4" />

              <button type="button" className="btn btn-outline-dark w-100">Sign Up</button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <BootstrapClient />
    </>
  );
}
