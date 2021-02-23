require "test_helper"

class ContactFormControllerTest < ActionDispatch::IntegrationTest
  test "should get send" do
    get contact_form_send_url
    assert_response :success
  end
end
